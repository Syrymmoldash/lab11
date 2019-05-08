from django.http import JsonResponse
from .models import TaskList, Task

def task_list(request):
    tasks = TaskList.objects.all()
    json_tasks = [c.to_json() for c in tasks]
    return JsonResponse(json_tasks, safe=False)


def task_detail(request, pk, fk):
    try:
        task = Task.objects.filter(task_list_id = pk)[fk-1]
    except TaskList.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(task.to_json())


def task(request, pk):
    try:
        task = Task.objects.filter(task_list_id = pk)
    except TaskList.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    json_detail = [p.to_view() for p in task]
    return JsonResponse(json_detail, safe=False)