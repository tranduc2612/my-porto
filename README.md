# Kevin Porto
## Features

* **Smooth Animation:** Smooth page scroll and scroll trigger animation.
* **Smooth Page Transition:** Smooth page transition with prefetching feature of next js.
* **Dynamic Data:** Read the project data from JSON file instead of directly implemented the data.
* **Intelliticks chat widget:** Chat with owner of the web realtime.
* **Spotify realtime widget:** Show what song youre playing in this web.

## Installation

1. Ensure you have [pnpm](https://pnpm.io/) installed. If not, you can install it using:

   ```shell
   npm install -g pnpm
   ```
2. Install dependencies:

   ```
   pnpm install
   ```
3. Start the development server

   ```shell
   pnpm next dev
   ```
4. Set env.local by copying env.example and fill the variable

   ```
   NEXT_PUBLIC_SPOTIFY_CLIENT_ID=
   NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET=
   NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN=
   ```

   for further reference on how to setup spotify api you can check this [link ](https://leerob.io/blog/spotify-api-nextjs "leerob blog")

## Usage

There are four main sections and two subpages in this portfolio website:

### Home

The home page serves as an introduction to the portfolio. It provides an overview of your web development skills and passion for the field. Users can explore other sections from here.

### About

The about page offers more detailed information about you as a web developer. It might include your background, education, skills, and interests in the field of web development.

### Projects

The projects section showcases your work as a web developer. Users can explore the projects you've worked on, and you can provide details such as project descriptions, technologies used, and images.

### Contact

The contact page allows users to get in touch with you. You can provide contact information or a contact form for inquiries.

### Subpages

- **Project archive:** list all of your project that dont needed to display at main project page.
- Project details: See the main project detail by clicking the project image.

Feel free to customize and expand upon these sections and subpages to suit your needs and showcase your unique skills and projects.

### Intelliticks chat widget

Enjoy chat realtime with ease using Intelliticks (https://app.intelliticks.com/)

## Contributing

Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or submit a pull request.

## Reference (inspiration)

- https://www.frans.my.id/
- https://kuon-yagi-portfolio.netlify.app/

## License

This project is licensed under the GPL-3.0 License see the [LICENSE](LICENSE) file for details.
