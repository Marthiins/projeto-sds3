package com.devsuperior.dsvendas.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsvendas.dto.SellerDTO;
import com.devsuperior.dsvendas.entities.Seller;
import com.devsuperior.dsvendas.repositories.SellerRepository;

@Service // registrar a classe o como sendo componente do sistema
public class SellerService { // implementação de um serviço

	@Autowired // injetar a dependencias automaticamente em vez de eu declarar em vez de eu
				// fazer que minha variavel recebe private SellerRepository repository = new
				// alguma coisa
	private SellerRepository repository; // tem um serviço que esta dependendo de um repository

	public List<SellerDTO> findAll() { // findAll buscar todos no banco de dados
		List<Seller> result = repository.findAll(); // vai chamar o repository
return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());	
		
	}

}
