# Generated by Django 4.0 on 2024-03-05 17:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core_post', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='edited',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterModelTable(
            name='post',
            table=None,
        ),
    ]
