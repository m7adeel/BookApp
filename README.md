# BookApp - Interactive Learning Platform 📚

This is an educational mobile application built with [Expo](https://expo.dev) and React Native, designed to provide an interactive learning experience through structured chapters and exercises.

## Project Overview

BookApp is a comprehensive learning platform that features:
- 33 interactive chapters covering various topics
- Multiple types of learning exercises
- Word lookup functionality with translations
- Interactive tables and matching exercises
- Audio pronunciation support
- Bilingual support (English and Bengali)

## Project Structure

```
BookApp/
├── app/                    # Main application screens
│   ├── index.tsx          # Chapter list screen
│   ├── chapters/[id].tsx  # Individual chapter screen
│   └── WordDetails.tsx    # Word lookup screen
├── components/            # Reusable components
│   ├── blocks/           # Exercise block components
│   └── common/           # Common UI components
├── data/                 # Data files
│   ├── chapters.js       # Chapter content
│   └── data.json        # Additional data
└── assets/              # Static assets
```

## Data Handling

### Chapter Data Structure
The application uses a structured data format for chapters stored in `data/chapters.js`. Each chapter contains:
- Title and lesson information
- Multiple exercise blocks
- Various content types (text, questions, tables, etc.)

### Exercise Types
The application supports multiple types of interactive exercises:
1. **Editable Tables**: Interactive tables where users can add/edit data
2. **Matching Exercises**: Column-based matching activities
3. **Fill-in-the-Blanks**: Text completion exercises
4. **Multiple Choice Questions**: Selection-based questions
5. **Free Answer Questions**: Open-ended responses

### Word Lookup System
The app integrates with external APIs for word definitions:
- Dictionary API for word meanings and examples
- Google Translate API for Bengali translations
- Audio pronunciation support through Expo's Audio API

## Technical Implementation

### State Management
- React's useState and useEffect hooks for local state management
- Expo Router for navigation and screen management
- Component-level state for interactive exercises

### Data Flow
1. Chapter data is loaded from static files
2. User interactions are handled through component state
3. External API calls for word lookup and translations
4. Persistent data handling for user progress

### Key Features
- File-based routing with Expo Router
- Responsive design for various screen sizes
- Dark/Light theme support
- Offline-first architecture
- Modular component structure

## Getting Started

1. Install dependencies
   ```bash
   npm install
   ```

2. Start the development server
   ```bash
   npx expo start
   ```

3. Run on your preferred platform:
   - iOS Simulator
   - Android Emulator
   - Physical device through Expo Go

## Development

### Adding New Content
1. Edit `data/chapters.js` to add new chapters
2. Use the predefined block types for exercises
3. Follow the existing data structure for consistency

### Creating New Components
1. Add new components in the `components` directory
2. Register new block types in `RenderBlock.tsx`
3. Update type definitions as needed

## Learn More

- [Expo Documentation](https://docs.expo.dev)
- [React Native Documentation](https://reactnative.dev)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
