# Simple Feedback System with Flask

This project demonstrates a basic feedback system integrated into a Flask web application.

## Features

*   **Feedback Submission Form**: Users can submit their name (optional), email (optional), a rating (1-5), and a feedback message.
*   **Data Storage**: Feedback is stored in an SQLite database.
*   **Admin View**: A simple page to view all submitted feedback.
*   **Form Validation**: Basic server-side form validation using Flask-WTF.
*   **CSRF Protection**: Included using Flask-WTF for enhanced security.
*   **Flash Messages**: Provides user feedback (e.g., success messages, error messages).

## Setup Instructions

1.  **Clone the Repository (or create the files):**
    Save all the provided code blocks into their respective files and directories.
    Make sure you have a `templates` directory in the same location as `app.py`.

    ```
    .
    ├── app.py
    ├── feedback.db  (will be created automatically)
    ├── requirements.txt
    └── templates/
        ├── admin_feedback.html
        ├── base.html
        ├── feedback_form.html
        └── index.html
    ```

2.  **Create a Virtual Environment (Recommended):**
    ```bash
    python -m venv venv
    ```

3.  **Activate the Virtual Environment:**
    *   On Windows:
        ```bash
        .\venv\Scripts\activate
        ```
    *   On macOS/Linux:
        ```bash
        source venv/bin/activate
        ```

4.  **Install Dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

5.  **Run the Flask Application:**
    ```bash
    python app.py
    ```

6.  **Access the Application:**
    Open your web browser and navigate to:
    *   **Home Page**: `http://127.0.0.1:5000/`
    *   **Submit Feedback**: `http://127.0.0.1:5000/feedback`
    *   **Admin Feedback View**: `http://127.0.0.1:5000/admin/feedback`

## Important Notes for Production

*   **`SECRET_KEY`**: Change `app.config['SECRET_KEY']` in `app.py` to a truly strong, random, and unique key. Never expose it publicly.
*   **Authentication/Authorization**: The `/admin/feedback` route is not protected. In a real application, you *must* add user authentication and authorization to restrict access to administrators only.
*   **Database Migrations**: For database schema changes in a production environment, consider using a tool like Flask-Migrate instead of `db.create_all()` which is primarily for initial setup.
*   **Error Handling**: Implement more robust error handling and logging.
*   **`debug=True`**: Set `app.run(debug=False)` for production. Debug mode can expose sensitive information.
*   **HTTPS**: Always use HTTPS in production to encrypt communication.
*   **Deployment**: Use a production-ready WSGI server like Gunicorn or uWSGI with Nginx/Apache.

This system provides a solid foundation for adding user feedback functionality to your Flask application.