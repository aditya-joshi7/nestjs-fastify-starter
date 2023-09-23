import { existsSync } from 'fs';
import { join } from 'path';

export function getEnvPath(dest: string): string {
  const env: string | undefined = process.env.NODE_ENV;
  const fallback: string = join(dest, '.env');
  const filename: string = env ? `${env}.env` : 'default.env';
  let filePath: string = join(dest, filename);
  if (!existsSync(filePath)) {
    filePath = fallback;
  }
  return filePath;
}
