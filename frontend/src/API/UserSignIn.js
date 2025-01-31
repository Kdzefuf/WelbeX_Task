import APIClient from "./APIClient";

/**
 * Класс, содержащий API для выполнения операций, связанных со входом пользователя
 * @class UserSignIn
 */
class UserSignIn {
  /**
   * Функция для выполнения входа пользователя в систему
   * @function
   * @async
   * @static
   * @param {string} email - Электронная почта пользователя
   * @param {string} password - Пароль пользователя
   * @returns {object|null} Возвращает данные пользователя при успешном входе, иначе null
   * @throws Выбрасывает ошибку в случае неудачного запроса
   */
  static async login(username, password) {
    try {
      const response = await APIClient.post('/login', { username, password });

      if (response.status === 200) {
        localStorage.setItem('userData', JSON.stringify(response.data));
        return response.data;
      } else {
        console.error('Не удалось выполнить вход. Статус:', response.status);
        return null;
      }
    } catch (error) {
      console.error('Ошибка при выполнении входа:', error);
      throw error;
    }
  }
}

export default UserSignIn;