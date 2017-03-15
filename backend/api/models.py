from django.db import models

class Member(models.Model):
	# unique id is automatically added as "id"
	firstname = models.CharField(max_length=255)
	lastname = models.CharField(max_length=255)
	phone = models.CharField(max_length=255)
	email = models.CharField(max_length=255)
	role = models.CharField(max_length=7)

	def __str__(self):
		return " ".join(["ID", str(self.id), "--", self.firstname, 
			self.lastname, self.phone, self.email, self.role])