import os
from PIL import Image

size = 256, 256
root = "public/images/adventures/"
directories = os.listdir(root)

for x in directories:
    subdir = root + x
    photos = os.listdir(subdir)
    subdir = subdir + "/"
    for photo in photos:
        thumbnail = photo[:photo.index(".")] + "_thumbnail" + photo[photo.index("."):]
        if thumbnail not in photos:
            try:
                im = Image.open(subdir + photo)
                im.thumbnail(size)
                print "created thumbnail", thumbnail
                im.save(subdir + thumbnail, "JPEG")
            except IOError:
                print "cannot create thumbnail for", photo
