# Generated by Django 2.2 on 2019-07-28 14:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='listing',
            name='category',
            field=models.CharField(choices=[('Produce', 'Produce'), ('Cat Products', 'Cate Products'), ('Apparel', 'Apparel'), ('Miscellaneous', 'Miscellaneous')], default='Miscellaneous', max_length=100),
        ),
    ]
