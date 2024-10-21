// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { SearchResult } from "leaflet-geosearch/src/providers/provider";

export interface Raw {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  lat: string;
  lon: string;
  class: string;
  type: string;
  place_rank: number;
  importance: number;
  addresstype: string;
  name: string;
  display_name: string;
  boundingbox: [string, string, string, string];
}

export interface Item {
  x: number;
  y: number;
  label: string;
  bounds: [[number, number], [number, number]] | null;
  raw: Raw;
}

export type SearchResponse = SearchResult<Item>[];
