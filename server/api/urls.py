from . import views
from django.urls import path,include
from django.contrib import admin
urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', views.user_create_view, name='user_create'),
    path('users/login/', views.user_login_view, name='user_login'),
    path('users/logout/', views.user_logout_view, name='user_logout'),
    path('Text/',views.text_view_set,name='textview'),
    
]

   