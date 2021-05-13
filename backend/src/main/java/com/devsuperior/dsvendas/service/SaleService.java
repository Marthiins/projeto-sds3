package com.devsuperior.dsvendas.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.entities.Sale;
import com.devsuperior.dsvendas.repositories.SaleRepository;
import com.devsuperior.dsvendas.repositories.SellerRepository;

@Service // registrar a classe o como sendo componente do sistema
public class SaleService { // implementação de um serviço

	@Autowired // injetar a dependencias automaticamente em vez de eu declarar em vez de eu
				// fazer que minha variavel recebe private SellerRepository repository = new
				// alguma coisa
	private SaleRepository repository; // tem um serviço que esta dependendo de um repository

	@Autowired
	private SellerRepository sellerRepository;

	// Busca paginada de vendas
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable) { // findAll buscar por paginação Pageable
		sellerRepository.findAll(); // antes da busca vou chamar o sellerRepository
		Page<Sale> result = repository.findAll(pageable); // vai chamar o repository
		return result.map(x -> new SaleDTO(x));

	}

}
