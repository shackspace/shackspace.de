shackspace.de Server Migration
##############################
:date: 2013-03-02 14:05
:author: hdz
:category: Allgemein
:slug: shackspace-de-server-migration

|testbild|

Our resident administrator Chris was quite busy over the last couple of
months with meticulous planning and preparations and then finally
executing the migration of our internet services to a new machine. Check
below report for a quick update on what happend.

On Friday March 1 we've migrated our internet server from a VServer
hosted in The Netherlands to our very own root server.

The former VServer with 1 GiB of RAM was fine until our blog software
"decided" to use up even more memory, crashing the system every now and
then.

So we rent a server with 16 GiB RAM, QCore CPU and 2x3 TB Storage. The
System runs a `Linux VServer Kernel <http://www.linux-vserver.org/>`__
on `Debian GNU/Linux <http://debian.org>`__. It is equipped with
Software RAID and LVM2 logical volume manager.

This gives us maximum control and flexibility for now and the future.

The operational concept arranges for isolating each application into a
separate VServer reducing dependencies, easing updates and enhancing
security.

| After two months of preparation the services and contents were migrated to the new server yesterday. As it turned out one more time those computer things are sometimes not as easy as it seems.
|  Sorry for the inconvenience.

.. |testbild| image:: /static/images/testbild.gif


