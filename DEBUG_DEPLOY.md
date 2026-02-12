# Debugging Deployment

If you see "Welcome to nginx!", it means Coolify is serving the default folder instead of your app.

## 1. Check Publish Directory
In Coolify, go to your resource settings:
- **General** > **Build Pack**: Ensure it is **Nixpacks**.
- **General** > **Publish Directory**: It MUST be set to `out`.
  - *Default is often empty or `public`, which is wrong for Next.js static export.*

## 2. Force Re-deploy
After changing the settings:
1. Click "Save".
2. Click "Deploy" (or "Force Re-deploy" in the menu).

## 3. Verify Build Logs
Check the "Build Logs" tab in Coolify. You should see:
- `npm run build` executing.
- Output ending with success.
- A line indicating the directory being served.

## Configuration Reference
Your project is configured to export to `out`:

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  output: 'export', // <--- This creates the 'out' folder
  // ...
};
```
