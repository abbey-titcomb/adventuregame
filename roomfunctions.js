<script type = "text/javascript">

/////////////////////////////////////////////////
if (room == 0 && /y/i.test(answer))
{
number = 1;
room = 1;
}
/////////////////////////////////////////////////
if (room == 1 && /(stand)|(get)|(up)/i.test(answer))
{
number = 2;
room = 1;
}
if (room == 1 && /(look)|(around)|(search)/i.test(answer))
{
number = 3;
room = 1;
}
if (room == 1 && /(find a)|(light)|(lamp)/i.test(answer))
{
number = 4;
room = 1;
}
if (room == 1 && /(turn)|(on)/i.test(answer))
{
number = 5;
room = 2;
}
/////////////////////////////////////////////////
if (room == 2 && /(stand)|(get)|(up)/i.test(answer))
{
number = 2;
room = 1;
}
if (room == 2 && /(look)|(around)|(search)/i.test(answer))
{
number = 3;
room = 1;
}
if (room == 2 && /(find a)|(light)|(lamp)/i.test(answer))
{
number = 4;
room = 1;
}
if (room == 2 && /(turn)|(on)/i.test(answer))
{
number = 5;
room = 2;
}
