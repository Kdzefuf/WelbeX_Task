import APIClient from "./APIClient";

/**
 * Класс, предоставляющий API для создания поста с файлом.
 * @class AddPostAPI
 */
class AddPostAPI {
  /**
   * Отправляет пост с файлом на сервер.
   * @function
   * @async
   * @static
   * @param {object} postData - Объект с данными поста.
   * @param {string} postData.topic - Тема поста.
   * @param {string} postData.postText - Текст поста.
   * @param {File} postData.file - Файл для загрузки.
   * @param {string} postData.token - Токен пользователя.
   * @returns {Promise<object>} Ответ сервера.
   * @throws {Error} В случае ошибки выводит сообщение в консоль.
   */
  static async addPost(postData) {
    try {
      console.log(postData.topic);
      const response = await APIClient.post("/posts", postData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (e) {
      console.error("Ошибка при отправке поста:", e);
      throw new Error("Не удалось отправить пост.");
    }
  }
}

export default AddPostAPI;
