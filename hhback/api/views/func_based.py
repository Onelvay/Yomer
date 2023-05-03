from api.models import Company, Vacancy, companies, vacancies,User,UserAndVacancy
from api.serializers import CompanySerializer, VacancySerializer,UserSerializer,UserAndVacancySerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from rest_framework import generics, status
from django.shortcuts import get_object_or_404
@api_view(['POST'])
def addVacancyToUser(request):  
    serializer = UserAndVacancySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(
            {'status': 'created'},
            status=status.HTTP_201_CREATED
        )
    return Response(
            {'status': 'bad request'},
            status=status.HTTP_400_BAD_REQUEST
        )
@api_view(['POST'])
def create_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(
            {'data': serializer.data},
            status=status.HTTP_201_CREATED
        )

    return Response(
        {'data': serializer.errors},
        status=status.HTTP_400_BAD_REQUEST
    )
@api_view(['POST','DELETE'])
def getUserVacancies(request):
    serializer = UserAndVacancySerializer(data=request.data)
    if serializer.is_valid():
        uservacancies=UserAndVacancy.objects.all()
        vacancies=Vacancy.objects.all()
        arr=[]
        for i in uservacancies:

            if i.user_id==serializer.data['user_id']:
                # print(i.user_id,i.vacancy_id)
                for v in vacancies:
                    if str(v.id)==i.vacancy_id:
                        arr.append(v)
        serialize1r = VacancySerializer(arr, many=True)
        return Response(serialize1r.data   )
  


@api_view(['GET', 'PUT', 'DELETE'])
def get_company(request, company_id):
    try:
        company = Company.objects.get(pk=company_id)
    except Company.DoesNotExist as e:
        return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)
    if request.method == "GET":
        serializer = CompanySerializer(company)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == "PUT":
        company = Company.objects.get(pk=company_id)
        serializer = CompanySerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        company.delete()
        return Response({"deleted": True}, status=status.HTTP_202_ACCEPTED)


@api_view(['GET', 'POST'])
def get_companies(request):
    if request.method == "GET":
        serializer = CompanySerializer(companies(), many=True)
        return Response(serializer.data)
    if request.method == "POST":
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def vacancies_by_company(request, company_id):
    company = Company.objects.get(pk=company_id)
    vacancies_ = [v for v in vacancies() if v.company.name == company.name]
    serializer = VacancySerializer(vacancies_, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def top_ten(request):
    top = Vacancy.objects.all().order_by('-salary')[:10]
    serializer = VacancySerializer(top, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
