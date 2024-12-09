import os
import json

def create_screenshot_json(folder_path='./screenshots', json_filename='screenshots.json'):
    folder_path = "./screenshots"
    json_filename = "./resources/screenshots.json"
    # Get all files in the screenshots folder
    screenshot_files = [f for f in os.listdir(folder_path) if f.endswith('.png')]
    
    # Create a dictionary to hold the data
    data = {
        "screenshots": screenshot_files
    }

    # Write the data to a JSON file
    with open(json_filename, 'w') as json_file:
        json.dump(data, json_file, indent=2)

    print(f"JSON file '{json_filename}' has been created with the filenames inside '{folder_path}'.")

# Call the function
create_screenshot_json()

