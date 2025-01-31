import APIClient from "./APIClient";

/**
 * Класс, предоставляющий API для создания поста.
 * @class AddPostAPI
 */
class AddPostAPI {
  /**
   * Отправляет пост на сервер.
   * @function
   * @async
   * @static
   * @param {object} postData - Объект с данными поста.
   * @param {string} postData.topic - Тема поста.
   * @param {string} postData.postText - Текст поста.
   * @returns {Promise<object>} Ответ сервера.
   * @throws {Error} В случае ошибки выводит сообщение в консоль.
   */
  static async addPost(postData) {
    try {
      const response = await APIClient.post("/posts", postData);
      return response.data;
    } catch (e) {
      console.error("Ошибка при отправке поста:", e);
      throw new Error("Не удалось отправить пост.");
    }
  }
}

export default AddPostAPI;
