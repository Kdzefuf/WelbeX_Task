import APIClient from "./APIClient";

/**
 * Класс, предоставляющий API для получения данных о популярных постах.
 * @class GetPosts
 */
class GetPosts {
  /**
   * Получает список постов.
   * @function
   * @async
   * @static
   * @returns {Promise<object>} Объект, содержащий данные о популярных постах.
   * @throws {Error} В случае ошибки выводит сообщение в консоль.
   */
  static async getPosts() {
    try {
      const response = await APIClient.get('/posts');
      return response.data;
    }
    catch (e) {
      console.error(e);
    }
  }
}

export default GetPosts;
