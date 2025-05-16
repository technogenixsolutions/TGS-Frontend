import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | My Awesome Site</title>
        <meta
          name="description"
          content="Welcome to the homepage of My Awesome Site. Discover amazing content and stay updated."
        />
        <meta
          name="keywords"
          content="Next.js, SEO, Homepage, React, Web Development"
        />
        <meta name="author" content="Your Name" />
        <link rel="canonical" href="https://yourdomain.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:title" content="Home | My Awesome Site" />
        <meta
          property="og:description"
          content="Explore content and insights on web development and more."
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/og-image.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | My Awesome Site" />
        <meta
          name="twitter:description"
          content="Explore content and insights on web development and more."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/og-image.jpg"
        />
        <meta name="twitter:creator" content="@yourtwitter" />
      </Head>

 
    </>
  );
}
