import React from "react";
import { Layout, QueryResult } from "../components";
import { gql, useQuery } from '@apollo/client'
import TrackCard from "../containers/track-card";

const TRACKS = gql`
query TracksForHome {
  tracksForHome {
    id
    title
    author {
      id
      name
      photo
    }
    thumbnail
    length
    modulesCount
  }
}
`

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return <Layout grid>
    <QueryResult loading={loading} error={error} data={data}>
      {
        data?.tracksForHome?.map((track: any) => <TrackCard key={track.id} track={track}></TrackCard>)
      }
    </QueryResult>
  </Layout>;
};

export default Tracks;
