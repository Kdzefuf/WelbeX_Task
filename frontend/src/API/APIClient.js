import axios from "axios";

/**
 * Экземпляр Axios, настроенный для отправки HTTP-запросов к серверу Express.js.
 * Используется для взаимодействия с API, обеспечивая стандартную конфигурацию
 * базового URL и тайм-аута запроса.
 * @constant {AxiosInstance} APIClient - Настроенный экземпляр Axios для API-запросов.
 * @property {string} baseURL - Базовый URL для запросов к серверу Express.js.
 * @property {number} timeout - Максимальное время ожидания ответа от сервера в миллисекундах.
 */
const APIClient = axios.create({
  baseURL: 'http://localhost:3500/api',
  timeout: 5000,
});

export default APIClient;
