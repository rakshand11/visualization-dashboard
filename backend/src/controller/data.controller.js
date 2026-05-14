import { dataModel } from "../model/data.model.js";

export const getAllData = async (req, res) => {
  try {
    const { end_year, topic, sector, region, pestle, source, country } =
      req.query;
    const filter = {};

    if (end_year) filter.end_year = end_year;
    if (topic) filter.topic = topic;
    if (sector) filter.sector = sector;
    if (region) filter.region = region;
    if (pestle) filter.pestle = pestle;
    if (source) filter.source = source;
    if (country) filter.country = country;
    const data = await dataModel.find(filter);
    res.status(200).json({
      msg: "All data provided",
      data,
    });
    return;
  } catch (error) {
    res.status(500).json({
      msg: "Internal server error",
    });
  }
};

export const getFilters = async (req, res) => {
  try {
    const [end_years, topics, sectors, regions, pestles, sources, countries] =
      await Promise.all([
        dataModel.distinct("end_year"),
        dataModel.distinct("topic"),
        dataModel.distinct("sector"),
        dataModel.distinct("region"),
        dataModel.distinct("pestle"),
        dataModel.distinct("source"),
        dataModel.distinct("country"),
      ]);
    res.status(200).json({
      msg: "All Filters :",
      filters: {
        end_years: end_years.filter(Boolean),
        topics: topics.filter(Boolean),
        sectors: sectors.filter(Boolean),
        regions: regions.filter(Boolean),
        pestles: pestles.filter(Boolean),
        sources: sources.filter(Boolean),
        countries: countries.filter(Boolean),
      },
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal server error",
    });
  }
};
