from django.db import models

from core.abstract.models import AbstractModel, AbstractManager


class PostManager(AbstractManager):
    pass


class Post(AbstractModel):
    author = models.ForeignKey(to="core_user.User", on_delete=models.CASCADE)
    body = models.TextField()
    edited = models.BooleanField(default=False)
    image = models.ImageField(upload_to='images/%Y/%m/%d',
                              blank=True, verbose_name='image')

    objects = PostManager()

    def __str__(self):
        return f"{self.author.name}"
    

