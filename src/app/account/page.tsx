'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

type AuthMode = 'login' | 'register';

export default function AccountPage() {
  const router = useRouter();
  const [authMode, setAuthMode] = useState<AuthMode>('login');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  // Estados do formulário
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpar erro do campo quando usuário começar a digitar
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      confirmPassword: ''
    };

    let isValid = true;

    // Validar email
    if (!formData.email) {
      newErrors.email = 'Email é obrigatório';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
      isValid = false;
    }

    // Validar senha
    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
      isValid = false;
    }

    // Validações específicas para registro
    if (authMode === 'register') {
      if (!formData.firstName) {
        newErrors.firstName = 'Nome é obrigatório';
        isValid = false;
      }

      if (!formData.lastName) {
        newErrors.lastName = 'Sobrenome é obrigatório';
        isValid = false;
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Confirmação de senha é obrigatória';
        isValid = false;
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Senhas não coincidem';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleTraditionalAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simular chamada à API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Aqui você faria a chamada real para sua API
      console.log('Dados do formulário:', formData);
      
      // Redirecionar para a página inicial após login bem-sucedido
      router.push('/');
    } catch (error) {
      console.error('Erro na autenticação:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setIsLoading(true);
    
    try {
      // Simular autenticação com Google
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Aqui você integraria com Firebase Auth ou outro serviço
      console.log('Login com Google');
      
      router.push('/');
    } catch (error) {
      console.error('Erro no login com Google:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleAuthMode = () => {
    setAuthMode(prev => prev === 'login' ? 'register' : 'login');
    setErrors({
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{authMode === 'login' ? 'Login' : 'Criar Conta'} - StyleShop</title>
        <meta name="description" content="Faça login ou crie sua conta na StyleShop" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {authMode === 'login' ? 'Entre na sua conta' : 'Crie sua conta'}
              </h1>
              <p className="text-gray-600">
                {authMode === 'login' 
                  ? 'Entre para continuar suas compras' 
                  : 'Junte-se à nossa comunidade de clientes'
                }
              </p>
            </div>

            {/* Formulário de Email/Senha */}
            <form onSubmit={handleTraditionalAuth} className="space-y-4">
              {authMode === 'register' && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Seu nome"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Sobrenome
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Seu sobrenome"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Senha
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 ${
                      errors.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Sua senha"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              {authMode === 'register' && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirmar Senha
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Confirme sua senha"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                  )}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-400 transition-colors font-medium"
              >
                {isLoading ? 'Carregando...' : (
                  authMode === 'login' ? 'Entrar' : 'Criar Conta'
                )}
              </button>
            </form>

            {/* Divisor */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-3 text-gray-500 text-sm">ou</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Botão do Google */}
            <button
              onClick={handleGoogleAuth}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-50 disabled:opacity-50 transition-colors"
            >
              <Image
                src="https://authjs.dev/img/providers/google.svg"
                alt="Google"
                width={20}
                height={20}
              />
              <span className="text-gray-700 font-medium">
                Continuar com Google
              </span>
            </button>

            {/* Link para alternar entre login e registro */}
            <div className="text-center mt-6">
              <p className="text-gray-600">
                {authMode === 'login' ? 'Não tem uma conta?' : 'Já tem uma conta?'}{' '}
                <button
                  type="button"
                  onClick={toggleAuthMode}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {authMode === 'login' ? 'Criar conta' : 'Fazer login'}
                </button>
              </p>
            </div>

            {/* Termos e condições (apenas no registro) */}
            {authMode === 'register' && (
              <p className="text-xs text-gray-500 text-center mt-4">
                Ao criar uma conta, você concorda com nossos{' '}
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Termos de Serviço
                </a>{' '}
                e{' '}
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Política de Privacidade
                </a>
              </p>
            )}
          </div>

          {/* Links adicionais */}
          <div className="text-center mt-6">
            <a href="/forgot-password" className="text-blue-600 hover:text-blue-800 text-sm">
              Esqueceu sua senha?
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}