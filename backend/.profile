OUTPUT_PATH="$(pwd)/firebase-service-account.json"
curl "$SERVICE_ACCOUNT_FILE_URL" --output $OUTPUT_PATH
export GOOGLE_APPLICATION_CREDENTIALS=$OUTPUT_PATH
