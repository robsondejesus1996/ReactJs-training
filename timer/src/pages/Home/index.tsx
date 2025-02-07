import { HandPalm, Play } from "phosphor-react";
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { useForm } from 'react-hook-form';
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, StopCountdownButton, TaskInput } from "./styles";
import { useEffect, useState } from "react";
import { differenceInSeconds } from 'date-fns';


const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmout: zod.number().min(1, 'O clico precisa ser no minimo de 5 minutos').max(60, 'O clico precisa ser de no maximo 60 minutos')
})


type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmout: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amoutSecondsPassed, setAmoutSecondsPassed] = useState(0)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmout: 0
    }
  });

  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  const totalSeconds = activeCycle ? activeCycle.minutesAmout * 60 : 0

  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )


        if (secondsDifference >= totalSeconds) {
          setCycles(state => state.map(cycle => {
            if (cycle.id === activeCycleId) {
              return { ...cycle, finishedDate: new Date() }
            } else {
              return cycle
            }
          }))

          setAmoutSecondsPassed(totalSeconds);

          clearInterval(interval);
        } else {
          setAmoutSecondsPassed(secondsDifference)
        }

      }, 1000);
    }
    return () => {
      clearInterval(interval);
    }
  }, [activeCycle, totalSeconds, activeCycleId])

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime());
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmout: data.minutesAmout,
      startDate: new Date(),
    }

    setCycles(state => [...state, newCycle]);
    setActiveCycleId(id);
    setAmoutSecondsPassed(0);

    reset();
  }


  function handleInterruptCycle() {
    setCycles(state => state.map(cycle => {
      if (cycle.id === activeCycleId) {
        return { ...cycle, interruptedDate: new Date() }
      } else {
        return cycle
      }
    }))
    setActiveCycleId(null)
  }




  const currentSeconds = activeCycle ? totalSeconds - amoutSecondsPassed : 0;

  const minutesAmout = Math.floor(currentSeconds / 60);
  const secondsAmout = currentSeconds % 60

  const minutes = String(minutesAmout).padStart(2, '0')
  const seconds = String(secondsAmout).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  const task = watch('task')
  const isSubmitDisabled = !task;

  // console.log(cycles)

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="De um nome para o seu projeto"
            disabled={!!activeCycle}
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="DevOps" />
          </datalist>

          <label htmlFor="minutesAmout">Durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmout"
            placeholder="00"
            step={5}
            min={1}
            max={60}
            disabled={!!activeCycle}
            {...register('minutesAmout', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>


        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>

        {activeCycle ? (
          <StopCountdownButton onClick={handleInterruptCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}