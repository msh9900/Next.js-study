import Head from "next/head";

import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>NextJs Events</title>
        <meta name="description" content="nextjs 스터디" />
      </Head>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
