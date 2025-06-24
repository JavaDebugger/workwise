import React, { useState, useMemo, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { MapPin, Calendar, Sparkles, Loader2 } from "lucide-react";
import { fetchCategories, fetchLocationSuggestions } from "../../services/jobService";
import FormField from "../ui/FormField";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Checkbox from "../ui/Checkbox";
import { Label } from "../ui/Label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/Select";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogFooter } from "../ui/Dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/Tabs";
import Textarea from "../ui/Textarea";


const JobDetailsStep = ({ formState, onInitiateAIAssist }) => {
  const { values, errors, touched, handleChange, handleBlur } = formState;
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [isLoadingLocations, setIsLoadingLocations] = useState(false);
  const [isAiDialogOpen, setIsAiDialogOpen] = useState(false);

  const { data: categories, isLoading: isLoadingCategories, error: categoriesError } = useQuery({
    queryKey: ["jobCategories"],
    queryFn: fetchCategories,
  });

  const debouncedFetchLocations = useMemo(() => {
    let timeoutId;
    return (input) => {
      clearTimeout(timeoutId);
      if (!input || input.length < 2) {
        setLocationSuggestions([]);
        return;
      }
      setIsLoadingLocations(true);
      timeoutId = setTimeout(async () => {
        try {
          const results = await fetchLocationSuggestions(input);
          setLocationSuggestions(results);
        } catch (err) {
          console.error("Failed to fetch locations", err);
          setLocationSuggestions([]);
        } finally {
          setIsLoadingLocations(false);
        }
      }, 500);
    };
  }, []);

  const groupedCategories = useMemo(() => {
    if (!categories) return {};
    return categories.reduce((acc, category) => {
      const groupName = category.group.charAt(0).toUpperCase() + category.group.slice(1).replace('_', ' ');
      if (!acc[groupName]) acc[groupName] = [];
      acc[groupName].push(category);
      return acc;
    }, {});
  }, [categories]);

  const canShowAIDialog = values.title?.trim() && values.category;

  const handleGenerateDescription = () => {
    onInitiateAIAssist(
      "description",
      { title: values.title, category: values.category, companyName: values.companyName, location: values.location, jobType: values.jobType },
      { aiDescriptionType: values.aiDescriptionType, aiCustomPrompt: values.aiCustomPrompt }
    );
    setIsAiDialogOpen(false);
  };

  const selectedCategoryName = useMemo(() => {
    return categories?.find(c => c.id === values.category)?.name;
  }, [categories, values.category]);

  const selectedJobTypeName = useMemo(() => {
    if (!values.jobType) return null;
    return values.jobType.charAt(0).toUpperCase() + values.jobType.slice(1);
  }, [values.jobType]);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Job Details</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <FormField id="job-title" label="Job Title" error={touched.title && errors.title} required hint="Be specific, e.g., 'Senior React Developer'">
          <div className="flex items-center gap-2">
            <Input id="job-title" type="text" value={values.title || ""} onChange={(e) => handleChange("title", e.target.value)} onBlur={() => handleBlur("title")} placeholder="e.g. Retail Sales Assistant" className="flex-1" aria-required="true" />
            <Dialog open={isAiDialogOpen} onOpenChange={setIsAiDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex items-center gap-1.5 shrink-0" type="button" disabled={!canShowAIDialog} title={!canShowAIDialog ? "Enter title & category first" : "AI Job Description Assistant"} onClick={() => { if (canShowAIDialog) setIsAiDialogOpen(true); }}>
                  <Sparkles className="h-4 w-4" /> <span className="hidden sm:inline">AI Assist</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogTitle>AI Job Description Assistant</DialogTitle>
                <DialogDescription>Let AI help craft a job description. Choose a style or provide custom instructions.</DialogDescription>
                <div className="grid gap-4 py-4">
                  <p>Using: <strong>{values.title}</strong> in <strong>{selectedCategoryName || values.category}</strong></p>
                  <Tabs defaultValue={values.aiDescriptionType || "basic"} onValueChange={(val) => handleChange("aiDescriptionType", val)} className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="basic">Basic</TabsTrigger>
                      <TabsTrigger value="detailed">Detailed</TabsTrigger>
                      <TabsTrigger value="custom">Custom</TabsTrigger>
                    </TabsList>
                    <TabsContent value="basic" className="p-4 border rounded-md mt-2 text-sm">Generate a concise job description covering essential duties and requirements.</TabsContent>
                    <TabsContent value="detailed" className="p-4 border rounded-md mt-2 text-sm">Generate a comprehensive description with detailed responsibilities, qualifications, and benefits.</TabsContent>
                    <TabsContent value="custom" className="p-4 border rounded-md mt-2">
                      <Textarea placeholder="e.g., Emphasize teamwork and a fast-paced environment. Mention our upcoming Project X." value={values.aiCustomPrompt || ""} onChange={(e) => handleChange("aiCustomPrompt", e.target.value)} className="min-h-[100px]" />
                    </TabsContent>
                  </Tabs>
                </div>
                <DialogFooter>
                  <Button type="button" variant="ghost" onClick={() => setIsAiDialogOpen(false)}>Cancel</Button>
                  <Button type="button" onClick={handleGenerateDescription}>
                    <Sparkles className="mr-2 h-4 w-4" /> Generate Description
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </FormField>

        <FormField id="job-category" label="Job Category" error={touched.category && errors.category} required>
          <Select value={values.category || ""} onValueChange={(value) => handleChange("category", value)} onOpenChange={(open) => { if (!open && !values.category) handleBlur("category") }}>
            <SelectTrigger id="job-category">
              <SelectValue placeholder="Select a category">{selectedCategoryName}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {isLoadingCategories && <div className="p-2 text-sm text-gray-500 flex items-center"><Loader2 className="h-4 w-4 animate-spin mr-2" />Loading...</div>}
              {categoriesError && <div className="p-2 text-sm text-red-500">Error loading categories.</div>}
              {Object.entries(groupedCategories).map(([groupName, cats]) => (
                <React.Fragment key={groupName}>
                  <div className="px-3 py-1.5 text-xs font-semibold text-gray-500 uppercase sticky top-0 bg-white">{groupName}</div>
                  {cats.map((cat) => <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>)}
                </React.Fragment>
              ))}
            </SelectContent>
          </Select>
        </FormField>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField id="job-type" label="Job Type" error={touched.jobType && errors.jobType} required>
          <Select value={values.jobType || ""} onValueChange={(value) => handleChange("jobType", value)} onOpenChange={(open) => { if (!open && !values.jobType) handleBlur("jobType") }}>
            <SelectTrigger id="job-type">
              <SelectValue placeholder="Select job type">{selectedJobTypeName}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {["full-time", "part-time", "contract", "temporary", "internship", "volunteer"].map(type =>
                <SelectItem key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</SelectItem>
              )}
            </SelectContent>
          </Select>
        </FormField>

        <FormField id="job-location" label="Location" error={touched.location && errors.location} required={!values.isRemote}>
          <div className="space-y-2">
            <div className="relative">
              <Input id="job-location" type="text" value={values.location || ""}
                onChange={(e) => { handleChange("location", e.target.value); debouncedFetchLocations(e.target.value); }}
                onBlur={() => { setTimeout(() => { setLocationSuggestions([]); handleBlur("location"); }, 200); }}
                placeholder="e.g. Cape Town, Western Cape" className="w-full" disabled={values.isRemote} />
              {isLoadingLocations && <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin text-gray-400" />}
              {locationSuggestions.length > 0 && (
                <ul className="absolute z-20 mt-1 w-full rounded-md border bg-white shadow-lg max-h-60 overflow-auto">
                  {locationSuggestions.map((suggestion) => (
                    <li key={suggestion.id} className="cursor-pointer px-3 py-2 hover:bg-gray-100 text-sm"
                      onMouseDown={() => { // Use onMouseDown to fire before blur on input
                        handleChange("location", suggestion.description);
                        setLocationSuggestions([]);
                      }}>
                      <div className="flex items-center"><MapPin className="h-4 w-4 text-gray-400 mr-2 shrink-0" />{suggestion.description}</div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remote-option" checked={values.isRemote || false} onCheckedChange={(checked) => { handleChange("isRemote", checked); if (checked) { handleChange("location", ""); if(errors.location) setLocationSuggestions([]); handleBlur("location"); } }} />
              <Label htmlFor="remote-option" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">This position is remote</Label>
            </div>
          </div>
        </FormField>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField id="application-deadline" label="Application Deadline (Optional)" error={touched.applicationDeadline && errors.applicationDeadline}>
          <div className="relative">
            <Input id="application-deadline" type="date" value={values.applicationDeadline || ""} onChange={(e) => handleChange("applicationDeadline", e.target.value)} onBlur={() => handleBlur("applicationDeadline")} className="w-full" min={new Date().toISOString().split('T')[0]} />
            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </FormField>

        <FormField id="salary-range" label="Salary Range (Optional, ZAR)" error={(touched.salaryMin && errors.salaryMin) || (touched.salaryMax && errors.salaryMax)} hint="Increases application rates">
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">R</span>
                <Input id="salary-min" type="number" value={values.salaryMin || ""} onChange={(e) => handleChange("salaryMin", e.target.value)} onBlur={() => handleBlur("salaryMin")} className="w-full pl-7" placeholder="Min" min="0" step="500" />
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">R</span>
                <Input id="salary-max" type="number" value={values.salaryMax || ""} onChange={(e) => handleChange("salaryMax", e.target.value)} onBlur={() => handleBlur("salaryMax")} className="w-full pl-7" placeholder="Max" min={values.salaryMin || "0"} step="500" />
              </div>
            </div>
            {/* Display combined or specific salary errors */}
            {(errors.salaryMin && !errors.salaryMax && <p className="text-xs text-red-500 mt-1">{errors.salaryMin}</p>) || (errors.salaryMax && <p className="text-xs text-red-500 mt-1">{errors.salaryMax}</p>) || (errors.salaryMin && errors.salaryMax && errors.salaryMin === errors.salaryMax && <p className="text-xs text-red-500 mt-1">{errors.salaryMin}</p>) || (errors.salaryMin && errors.salaryMax && errors.salaryMin !== errors.salaryMax && <> <p className="text-xs text-red-500 mt-1">{errors.salaryMin}</p> <p className="text-xs text-red-500 mt-1">{errors.salaryMax}</p></>)}
            <div className="flex items-center space-x-2">
              <Checkbox id="salary-negotiable" checked={values.isSalaryNegotiable || false} onCheckedChange={(checked) => handleChange("isSalaryNegotiable", checked)} />
              <Label htmlFor="salary-negotiable" className="text-sm">Salary negotiable</Label>
            </div>
          </div>
        </FormField>
      </div>
    </div>
  );
};

export default JobDetailsStep;
