const baseUrl = "https://active-jobs-db.p.rapidapi.com/active-ats";
const rapidApiKey: string = process.env.RAPID_API_KEY as string;

export interface queryType {
    time_frame: string;
    limit: string;
    offset: string;
    description_format: string;
    title: string;
    location: string;
}

export function jobOptions(queryData: queryType): {} {
  const options = {
    method: "GET",
    url: baseUrl,
    params: {
      time_frame: queryData.time_frame,
      limit: queryData.limit,
      offset: queryData.offset,
      description_format: queryData.description_format,
      title: queryData.title,
      location: queryData.location,
    },
    headers: {
      "x-rapidapi-key": rapidApiKey,
      "x-rapidapi-host": "active-jobs-db.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  };
  return options;
}
