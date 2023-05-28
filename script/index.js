import { getTimeAndDate } from './common/time.js';
import { getData } from './services/data.js';
import { getWeather } from './services/weather.js';
import { getNews } from './services/news.js';

getTimeAndDate();
getData();
getWeather();
getNews();
