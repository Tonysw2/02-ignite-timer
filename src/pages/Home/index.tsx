import { Play } from 'phosphor-react'
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from './styles'

// import { zodResolver } from '@hookform/resolvers/zod'
// import { useForm } from 'react-hook-form'
// import * as zod from 'zod'

// const NewCycleFormValidationSchema = zod.object({
//   task: zod.string().min(1, 'Informe a tarefa'),
// })

export const Home = function () {
  // function handleCreateNewCycle(data: any) {}

  // const { register, handleSubmit, watch } = useForm({
  //   resolver: zodResolver(NewCycleFormValidationSchema),
  //   defaultValues: {
  //     task: '',
  //     minutesAmount: 0,
  //   },
  // })

  // const task = watch('task')
  // const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={() => {}}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            placeholder="Dê um nome para seu projeto"
            // {...register('task')}
          />

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountDownButton type="submit" disabled>
          <Play size={24} weight="bold" />
          Comecar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
