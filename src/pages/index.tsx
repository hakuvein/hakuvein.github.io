import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import NavigationBar from "../components/navbar";
import { StaticImage } from "gatsby-plugin-image";

export function Head() {
    return (
        <>
            <title>Hakuvein</title>

            <meta
                name="description"
                content="Brian Li - Content Creator Portfolio"
            />
            <meta
                name="keywords"
                content="hakuvein brian li streamer content creator portfolio website"
            />
            <meta name="author" content="Jonathan Lee" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
        </>
    );
}

const IndexPage: React.FC<PageProps> = () => {
    return (
        <main>
            <StaticImage
                src={"../images/banner3.png"}
                alt={"Banner"}
            ></StaticImage>
            <NavigationBar />
            <section id="about-me-section">
                <h1>Welcome to Hakuvein's Streamer Portfolio!</h1>

                <h2>About Me</h2>
                <p>
                    Hey there, I'm Hakuvein, also known as Brian Li. It's
                    awesome to have you here and let me share my journey as a
                    streamer with you. Gaming isn't just a hobby for me; it's my
                    absolute passion. I'm thrilled to bring that excitement to
                    viewers like you.
                </p>

                <h3>Gaming Expertise</h3>
                <p>
                    When it comes to games, I'm an all-rounder. From
                    heart-pumping action to epic adventures and everything in
                    between, I've explored a wide range of genres. I take pride
                    in understanding the ins and outs of game mechanics,
                    allowing me to perform at my best and provide helpful
                    insights to fellow gamers. Whether I'm dominating in
                    competitive titles or immersing myself in captivating
                    narratives, I'm always up for a thrilling gaming experience.
                </p>
                <StaticImage src={"../images/profile.jpg"} alt={""} />

                <h3>Interactive Community</h3>
                <p>
                    But let me tell you, it's not just about me. It's about our
                    community. I believe that streaming is a shared experience,
                    and I'm incredibly grateful for the amazing community we've
                    built together. You're not just a spectator; you're an
                    integral part of the adventure. I cherish our lively
                    conversations, answering your questions, and creating a
                    positive, inclusive space where everyone feels welcome.
                    Together, we make every stream an unforgettable journey.
                </p>
            </section>

            <section id="media-kit-section">
                <h2>Media Kit</h2>
                <h3>Highlights and Achievements</h3>
                <p>
                    Curious about my past achievements? Well, I've had some
                    truly epic moments and remarkable milestones along the way.
                    From exhilarating multiplayer victories to mind-blowing solo
                    plays, you can catch all the highlights on my portfolio.
                    It's a testament to the hard work and dedication I put into
                    my craft, and I'm excited to share those moments with you.
                </p>
                <h3>Support and Collaborations</h3>
                <p>
                    But my journey wouldn't be complete without your support. It
                    means the world to me, and I'm always open to collaborations
                    and partnerships. If you have an idea or a platform where we
                    can create something extraordinary together, don't hesitate
                    to reach out. Let's combine our talents and provide viewers
                    worldwide with an unforgettable gaming experience.
                </p>
            </section>

            <section id="contact-me-section">
                <h2>Stay Connected</h2>
                <p>
                    To stay connected and never miss a moment, make sure to
                    follow me on Twitch. That's where all the magic happens with
                    my live streams. You can also find me on social media
                    platforms like Twitter and Instagram, where I share updates,
                    highlights, and all the latest news. Join our Hakuvein
                    community today, and together, we'll embark on an incredible
                    gaming adventure.
                </p>

                <p>
                    Thank you for visiting my Streamer Portfolio. I hope you
                    enjoy exploring the world of gaming through my streams, and
                    remember, above all, let's have fun along the way!
                </p>
            </section>
        </main>
    );
};

export default IndexPage;
