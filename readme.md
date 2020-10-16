# Sessionized

Sessionized is a tool for CodeCamp (or related conference) organizers.  It consumes [Sessionize](https://sessionize.com/) data and then:

- Provides attendees
  - A web app they can navigate to help find their next session
- Provides organizers
  - "speaker cards" for marketing on Twitter and a page to generate tweets
  - Branded "Transition Screens" page they can show if there are technical difficulties, are out to lunch, etc
  - An Up Next / Happening Now screen
  - An "Export Page" for exporting session an speaker data to Excel e.g. to help with analytics

The app is designed to be easily branded for different CodeCamps, and easily host-able via Github pages.  Customizing the app will require a cursory knowledge of Angular.

## Getting Started

1. Clone this repo
2. Expose Sessionize API (under API / Embed)
    - Format: Json (advanced)
    - Include all sessions and speakers
3. Update API URL in `src/app/sessionize-service.service.ts`
4. Customize other elements
    - Update `src/app/no-va-nav/no-va-nav.component.html` to change the banner and branding
    - Add in a registration url to `src/app/watch-now.service.ts` so it shows up in speaker cards
    - Optionally update `src/app/watch-now.service.ts` with your "Watch Now" url's (once you have them)
    - Optionally update theming (e.g. `$highlight-color`) in `styles.scss`
