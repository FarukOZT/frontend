import http from ".../http.common"

class PlantService {


    getAll(){
        return http.get("/plants")
    }
}