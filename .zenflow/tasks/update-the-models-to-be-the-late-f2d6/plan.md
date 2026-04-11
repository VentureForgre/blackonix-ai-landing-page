# Auto

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

## Agent Instructions

### [x] Step: Update landing-page model cards
Replace the six existing stitched model cards in `stitch_blackonix_ai_crowdfunding/code.html` with current OpenRouter-facing models that match the user's revised request: include Gemma 4, Kimi K2, and MiniMax, and keep the existing six-card layout without adding boxes. Remove the old Mistral-era cards from that grid only.

### [x] Step: Route model deploy CTAs to login
Convert each model-card "Deploy Now" affordance into a real link to `/login`, and add a minimal `app/login/page.tsx` so the route exists in the app. Leave the payment CTA wiring untouched.

### [x] Step: Verify with tests and finish
Add or update tests to assert the new model names and `/login` links are present in the stitched HTML, then run `npm test` and `npm run lint`. Mark each completed step as `[x]` before finishing and push the changes to `main`.
