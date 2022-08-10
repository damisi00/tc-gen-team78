# Generated by Django 4.0.5 on 2022-08-08 12:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0012_rename_website_name_post_company_address_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='company_name',
            new_name='website_name',
        ),
        migrations.AlterField(
            model_name='post',
            name='company_address',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='policy_effective_date',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
