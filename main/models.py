from django.db import models
from django.contrib.auth.models import User
from datetime import datetime

class UserProfile(models.Model):
	name = models.CharField(max_length = 100, null = True)
	nick_name = models.CharField(max_length = 50, null = True, unique = True)
	user = models.ForeignKey(User, null = True)
	fbid = models.CharField(max_length = 30 ,null = True, unique = True)
	interests = models.ManyToManyField('Interest', related_name = "user_interest")
	groups = models.ManyToManyField('Group', related_name = 'user_group')
	anonymous = models.BooleanField(default = False)
	timestamp = models.DateTimeField(default = datetime.now)
	lat = models.CharField(max_length = 30, null = True)
	longitude = models.CharField(max_length = 30, null = True)
	locality = models.CharField(max_length = 100, null = True)
	dp = models.ImageField(upload_to='dps', null = True)
	dp_url = models.SlugField(max_length = 500, null = True)

	def __unicode__(self):
		return self.name

class Interest(models.Model):
	name = models.CharField(max_length = 50)

	def __unicode__(self):
		return self.name

class Group(models.Model):
	locality = models.CharField(max_length = 100, null = True)
	message = models.ManyToManyField('Message', related_name = 'group_message', null = True)
	interest = models.ForeignKey('Interest', null = True, related_name = 'group_interest')
	members = models.ManyToManyField('UserProfile', related_name = 'members' ,null = True)
	name = models.SlugField(max_length = 150, null = True)

	def save(self, *args, **kwargs):
		self.name = self.locality + '_' + self.interest.name
        	super(Group, self).save(*args, **kwargs)

	def __unicode__(self):
    		return self.name

class Indi_group(models.Model):
	user1 = models.ForeignKey('UserProfile', null = True, related_name = 'indi_user1')
	user2 = models.ForeignKey('UserProfile', null = True, related_name = 'indi_user2')
	name = models.CharField(max_length = 50, null = True)
	message = models.ManyToManyField('Message', related_name = 'indi_msgs')

	def save(self, *args, **kwargs):
		self.name = self.user1.nick_name+'_'+self.user2.nick_name
		super(Indi_group, self).save(*args, **kwargs)

		def __unicode__(self):
			return self.name

class Indi_msg(models.Model):
	group = models.ForeignKey('Indi_group', related_name = 'message_indi_group')
	message = models.TextField()
	user = models.ForeignKey('UserProfile', related_name = 'user_indi_msg')
	timestamp = models.DateTimeField(default = datetime.now)

	def __unicode__(self):
		return self.user.nick_name + self.message

class Message(models.Model):
	group = models.ForeignKey('Group', related_name = 'message_group')
	message = models.TextField()
	user = models.ForeignKey('UserProfile', related_name = 'user_message')
	timestamp = models.DateTimeField(default = datetime.now)

	def __unicode__(self):
		return self.user.nick_name + self.message

class Group_user(models.Model):
	user = models.ForeignKey('UserProfile', null = True, related_name = 'group_user_time')
	group = models.ForeignKey('Group', null = True, related_name = 'user_group_time')
	time_joined = models.DateTimeField(default = datetime.now)
	time_left = models.DateTimeField(default = datetime.now)

	def __unicode__(self):
		return self.user.name + self.group.name