import { Map } from './map.model';
export interface WeatherRoute {
  src: Map;
  dest: Map;
  wayPoints: Map[];
}
