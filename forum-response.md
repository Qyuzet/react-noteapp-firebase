Docker Hub Submission - React Note App with Firebase

I have successfully containerized my Week 5 React Note application and published it to Docker Hub.

Docker Hub Repository: https://hub.docker.com/r/riqyuzet/react-noteapp-firebase

To run the application:

1. Make sure Docker is installed on your system
2. Open terminal/command prompt
3. Run the following command:

```bash
docker run -d -p 80:80 riqyuzet/react-noteapp-firebase:latest
```

4. Access the application at http://localhost:80

Features implemented:

- React-based note-taking application
- Firebase Firestore integration for real-time data storage
- CRUD operations (Create, Read, Update, Delete notes)
- Responsive design with Tailwind CSS and DaisyUI
- Containerized with Docker for easy deployment

GitHub Repository: https://github.com/Qyuzet/react-noteapp-firebase

Thank you for the opportunity to complete this extra task!
