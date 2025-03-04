import os

def rename_files():
    files = [f for f in os.listdir() if os.path.isfile(f)]  # Get all files in current directory
    files.sort()  # Sort files alphabetically
    
    for index, file in enumerate(files, start=1):
        ext = os.path.splitext(file)[1]  # Get file extension
        new_name = f"{index}{ext}"  # Create new name with original extension
        os.rename(file, new_name)  # Rename file
        print(f"Renamed {file} -> {new_name}")

rename_files()
