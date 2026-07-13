import os
import glob

def replace_in_file(filepath, replacements):
    with open(filepath, 'r') as f:
        content = f.read()
    
    new_content = content
    for old, new in replacements.items():
        new_content = new_content.replace(old, new)
        
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

replacements = {
    "Mr. Rajyavardhan": "Dr. Harshvardhan Chaturvedi",
    "Rajyavardhan": "Dr. Harshvardhan Chaturvedi",
    "7023898912": "9588925771",
    "70238 98912": "95889 25771",
    "rajyavardhan2017@gmail.com": "contact@drharshvardhan.com",
    "https://www.instagram.com/drrajyavardhan": "https://www.instagram.com/drharshvardhann_/",
    "https://www.linkedin.com/in/rajyavardhan-singh-spine-chiropractic-b08920276/": "https://www.linkedin.com/in/dr-harshvardhan-chaturvedi-b18108268/",
    "/wp-media/cropped-dr-raj.jpg": "/doctor.png",
    "House no -26, S.B Vihar Gate, Nanag Vihar, 10, Swej Farm Rd, near Reliance Smart Point, Ramnagar Extension, Sodala, Jaipur, Rajasthan 302019": "333, Gurunanakpura, Tilak Nagar, Jaipur, Rajasthan 302004",
    "Spinal Care Chiropractic Clinic": "Dr. Harshvardhan Chiropractic Clinic",
    "Spinal Care Clinic": "Dr. Harshvardhan Clinic",
    "maps.app.goo.gl/tSgD7QYtq2a1jR737": "maps.app.goo.gl/YPCaZSPRspJqFGop8"
}

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.ts') or file.endswith('.tsx') or file.endswith('.css'):
            replace_in_file(os.path.join(root, file), replacements)

print("Done")
