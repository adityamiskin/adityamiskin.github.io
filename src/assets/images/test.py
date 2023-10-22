from PIL import Image
import os

# Set the source and destination folders
source_folder = "./Lightroom edits"  # Replace with the path to your source folder
destination_folder = "./ligtroom_edits_webp"  # Replace with the path to your destination folder

# Ensure the destination folder exists, create it if necessary
if not os.path.exists(destination_folder):
    os.makedirs(destination_folder)

# List all files in the source folder
files = os.listdir(source_folder)

# Iterate through the files
for file in files:
    # Check if the file is a JPEG image
    if file.endswith(".jpg") or file.endswith(".jpeg"):
        file_path = os.path.join(source_folder, file)
        # Open the image using Pillow
        image = Image.open(file_path)
        
        # Create the WebP filename by replacing the file extension
        webp_filename = os.path.splitext(file)[0] + ".webp"
        webp_file_path = os.path.join(destination_folder, webp_filename)
        
        # Convert and save the image in WebP format
        image.save(webp_file_path, "webp", optimize = True, quality = 60)
        
        # Close the image
        image.close()

print("Conversion complete. WebP images saved in the destination folder.")
