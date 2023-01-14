from django.apps import AppConfig


class DashboardConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "dashboard"

    ## Call the Signal
    def ready(self):
        import dashboard.signals
