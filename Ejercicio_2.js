var convertor = {
    convertir:function convertir(measure, unit, unitNew, type)
    {
        result = 0;
        switch(type)
        {
            case 'L':
                if(unit=='m')
                {
                    if(unitNew=='cm')
                    {
                        result=measure*100;
                        return result + unitNew;
                    }
                    else if(unitNew=='ft')
                    {
                        result=measure*3.28;
                        return result + unitNew;
                    }
                    else if(unit=='km')
                    {
                        result=measure/1000;
                        return result + unitNew;
                    }
                }
                else if(unit=='km')
                {
                    result=measure*1000;
                    return result + unitNew;
                }
                else if(unit=='ft')
                {
                    result=measure*0.3048;
                    return result + unitNew;
                }
                break;
            case 'T':
                if(unit=='c')
                {
                    if(unitNew=='f')
                    {
                        result = (measure*(9/5)) + 32;
                        return result + unitNew;
                    }
                    else if(unitNew='k')
                    {
                        result = measure + 273.15;
                        return result + unitNew;
                    }
                }
                else if(unit=='f')
                {
                    if(unitNew=='c')
                    {
                        result = (measure-32)*(5/9);
                        return result + unitNew;
                    }
                    else if(unitNew='k')
                    {
                        result = (measure + 459.67)*(5/9);
                        return result + unitNew;
                    }
                }
                else if(unit=='k')
                {
                    if(unitNew=='c')
                    {
                        result =measure - 273.15;
                        return result + unitNew;
                    }
                    else if(unitNew='f')
                    {
                        result = measure*(9/5) - 459.67;
                        return result + unitNew;
                    }
                }
                break;
        }
        return "Las unidades son incorrectas"
    }
}
