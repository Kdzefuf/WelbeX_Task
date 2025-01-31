import APIClient from "./APIClient";

/**
 * Класс, предоставляющий API для получения информации о пользователе.
 * @class GetUserInfo
 */
class GetUserInfo {
  /**
   * Получает информацию о пользователе на основе предоставленного ID.
   * @function
   * @async
   * @static
   * @param {string} id - ID пользователя.
   * @returns {Promise<object>} Объект, содержащий данные пользователя.
   * @throws {Error} В случае ошибки возвращает ошибку или выводит сообщение в консоль.
   */
  static async getUserInfo(token) {
    try {
      const response = await APIClient.get(`/users/${token}`);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  }
}

export default GetUserInfo;
