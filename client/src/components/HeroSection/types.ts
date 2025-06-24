export interface Particle {
  x: number;
  y: number;
  text: string;
  fontSize: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
}

export interface MousePosition {
  x: number | null;
  y: number | null;
}

export const JOB_CATEGORIES = [
  'Cashier',
  'General Worker',
  'Security',
  'Petrol Attendant',
  'Domestic Worker',
  'Cleaner',
  'Landscaping',
  'Driver',
  'Call Center',
  'Warehouse',
  'Retail',
  'Receptionist',
  'Artisan',
  'Plumber',
] as const;

export const ANIMATION_CONFIG = {
  PARTICLE_COUNT: 24,
  MIN_FONT_SIZE: 12,
  MAX_FONT_SIZE: 18,
  MIN_OPACITY: 0.3,
  MAX_OPACITY: 0.7,
  MOVEMENT_SPEED: 0.3,
  MOUSE_INFLUENCE_RADIUS: 200,
  FORCE_MULTIPLIER: 1.5,
  CONNECTION_DISTANCE: 150,
  EDGE_PADDING: 50,
} as const;
