package com.devsuperior.dsvendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dsvendas.dto.SaleSucessDTO;
import com.devsuperior.dsvendas.dto.SaleSumDTO;
import com.devsuperior.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {// JpaRepository tem o tipo da entidade que é o
																		// Seller e o Id que é o Long
//Essa parte é do SaleSumDTO
	@Query ("SELECT new com.devsuperior.dsvendas.dto.SaleSumDTO (obj.seller, SUM(obj.amount))"
+ "FROM  Sale AS obj GROUP BY obj.seller")  //consulta especifica JPA que vou usar é a jpql
	List<SaleSumDTO> amountGroupBySeller();
	
	@Query ("SELECT new com.devsuperior.dsvendas.dto.SaleSucessDTO (obj.seller, SUM(obj.visited), SUM(obj.deals) )"
			+ "FROM  Sale AS obj GROUP BY obj.seller")  //consulta especifica JPA que vou usar é a jpql
				List<SaleSucessDTO> sucessGroupBySeller();
}
