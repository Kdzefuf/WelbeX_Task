import APIClient from "./APIClient";

/**
 * Класс, предоставляющий API для обновления информации в посте.
 * @class PutPostData
 */
class PutPostData {
  /**
   * Обновляет информацию о посте на основе предоставленного ID и данных.
   * @function
   * @async
   * @static
   * @param {string} id - ID поста.
   * @param {object} changes - Объект с изменениями данных потса.
   * @returns {Promise<object>} Объект, содержащий обновлённые данные поста.
   * @throws {Error} В случае ошибки возвращает ошибку или выводит сообщение в консоль.
   */
  static async updatePost(id, changes) {
    try {
      console.log(changes, id);
      const response = await APIClient.put(`/posts/${id}`, changes);
      if (response.status === 200) return true;
      return false;
    } catch (e) {
      console.error(e);
    }
  }
}

export default PutPostData;
