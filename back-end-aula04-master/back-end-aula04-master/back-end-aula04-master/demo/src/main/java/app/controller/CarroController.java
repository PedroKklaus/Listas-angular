package app.controller;

import app.dto.CarroDTO;
import app.dto.PessoaDTO;
import app.service.CarroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/carro")
@CrossOrigin(origins = "http://localhost:4200")
public class CarroController {

    @Autowired
    CarroService carroService;

    @GetMapping
    private ResponseEntity<List<CarroDTO>> listAll(){
        try {
            List<CarroDTO> lista = carroService.listAll();
            return new ResponseEntity<>(lista, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping
    public ResponseEntity <CarroDTO> update (@RequestBody CarroDTO carroDTO){
        try {
            CarroDTO carroSalvo = carroService.save(carroDTO);
            return new ResponseEntity<>(carroSalvo, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping
    private ResponseEntity<CarroDTO> save(@RequestBody CarroDTO carroDTO){
        try {
            CarroDTO carrroSalvo = carroService.save(carroDTO);
            return new ResponseEntity<>(carrroSalvo, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }


    @DeleteMapping
    public ResponseEntity <HttpStatus> delete (@RequestParam ("id") final Long id){
        try {
            this.carroService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("erro")
    private ResponseEntity<List<CarroDTO>> exemploErro(){
        return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }

}
