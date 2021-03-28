import { Tournament } from "./Componente.News"

 class FuncoesWebsite{
    NewNumber(Nmb){
        if(Nmb == null){
          return 0
        }
        return new Intl.NumberFormat('de-DE', { currency: 'EUR' }).format(Nmb)
        
      }
      SortingClasses(Obj){
        switch (Obj){
        case 1:
          return 'nick second'
         case 2:
           return 'nick third'
           case 3:
             return 'nick fourth'
             case 4:
               return 'nick fifth'
        }
      }
      NameRanking(num) {
        switch (num) {
            case 0:
                return 'Trainee';
            case 1:
                return 'Senior Trainee';
            case 2:
                return 'Private';
            case 3:
                return 'Corporal';
            case 4:
                return 'Sergeant';
            case 5:
                return 'Sergeant Grade 1';
            case 6:
                return 'Sergeant Grade 2';
            case 7:
                return 'Sergeant Grade 3';
            case 8:
                return 'Sergeant 1st Class Grade 1';
            case 9:
                return 'Sergeant 1st Class Grade 2';
            case 10:
                return 'Sergeant 1st Class Grade 3';
            case 11:
                return 'Sergeant 1st Class Grade 4';
            case 12:
                return 'Master Sergeant Grade 1';
            case 13:
                return 'Master Sergeant Grade 2';
            case 14:
                return 'Master Sergeant Grade 3';
            case 15:
                return 'Master Sergeant Grade 4';
            case 16:
                return 'Master Sergeant Grade 5';
            case 17:
                return '2nd lieutenant Grade 1';
            case 18:
                return '2nd lieutenant Grade 2';
            case 19:
                return '2nd lieutenant Grade 3';
            case 20:
                return '2nd lieutenant Grade 4';
            case 21:
                return '1st lieutenant Grade 1';
            case 22:
                return '1st lieutenant Grade 2';
            case 23:
                return '1st lieutenant Grade 3';
            case 24:
                return '1st lieutenant Grade 4';
            case 25:
                return '1st lieutenant Grade 5';
            case 26:
                return 'Captian Grade 1';
            case 27:
                return 'Captian Grade 2';
            case 28:
                return 'Captian Grade 3';
            case 29:
                return 'Captian Grade 4';
            case 30:
                return 'Captian Grade 5';
            case 31:
                return 'Major Grade 1';
            case 32:
                return 'Major Grade 2';
            case 33:
                return 'Major Grade 3';
            case 34:
                return 'Major Grade 4';
            case 35:
                return 'Major Grade 5';
            case 36:
                return 'Lt Colonel Grade 1';
            case 37:
                return 'Lt Colonel Grade 2';
            case 38:
                return 'Lt Colonel Grade 3';
            case 39:
                return 'Lt Colonel Grade 4';
            case 40:
                return 'Lt Colonel Grade 5';
            case 41:
                return 'Colonel Grade 1';
            case 42:
                return 'Colonel Grade 2';
            case 43:
                return 'Colonel Grade 3';
            case 44:
                return 'Colonel Grade 4';
            case 45:
                return 'Colonel Grade 5';
            case 46:
                return 'Brigade';
            case 47:
                return 'Major General';
            case 48:
                return 'Lt General';
            case 49:
                return 'General';
            case 50:
                return 'Commander';
            case 51:
                return 'HERO';
            case 52:
                return 'New Rank';
            case 53:
                return 'Game Master';
        }
    }
    
    ExplodeUrl(Path){
        try{
        if(Path === null || Path === undefined){
          return 'individual'
        }
        const URL = Path
        const Explode = URL.split("/ranking/");
        if(Explode[1] == 'individualmatchs'){
          return 'matchs'
        }
        if(Explode[1] == 'individualhs'){
            return 'hs'
        }
        return 'individual'
        }catch (e){
          return 'individual'
        }
      }

      CategoryNews(obj){
        switch (obj){
            case 0:
                return "/News/Notice/"
                case 1:
                    return "/News/Patch/"
                    case 2:
                   return  "FALTAFAZER"
        }
    }
}

   


export default FuncoesWebsite

